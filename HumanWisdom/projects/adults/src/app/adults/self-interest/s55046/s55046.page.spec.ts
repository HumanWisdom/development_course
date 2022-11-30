import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S55046Page } from './s55046.page';

describe('S55046Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S55046Page;
  let fixture: ComponentFixture<S55046Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S55046Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S55046Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
