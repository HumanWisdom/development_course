import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61033Page } from './s61033.page';

describe('S61033Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61033Page;
  let fixture: ComponentFixture<S61033Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61033Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61033Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
