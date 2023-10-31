import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45006Page } from './s45006.page';

describe('S45006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45006Page;
  let fixture: ComponentFixture<S45006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
