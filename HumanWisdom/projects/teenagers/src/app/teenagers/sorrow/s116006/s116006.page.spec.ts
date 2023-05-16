import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S116006Page } from './s116006.page';

describe('S116006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S116006Page;
  let fixture: ComponentFixture<S116006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S116006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S116006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
