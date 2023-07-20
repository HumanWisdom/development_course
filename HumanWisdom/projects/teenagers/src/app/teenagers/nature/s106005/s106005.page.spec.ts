import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S106005Page } from './s106005.page';

describe('S106005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S106005Page;
  let fixture: ComponentFixture<S106005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S106005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S106005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
