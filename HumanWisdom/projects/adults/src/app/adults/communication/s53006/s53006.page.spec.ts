import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53006Page } from './s53006.page';

describe('S53006Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53006Page;
  let fixture: ComponentFixture<S53006Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53006Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53006Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
