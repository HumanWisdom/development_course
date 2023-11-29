import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132242Page } from './s132242.page';

describe('S132242Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132242Page;
  let fixture: ComponentFixture<S132242Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132242Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132242Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
