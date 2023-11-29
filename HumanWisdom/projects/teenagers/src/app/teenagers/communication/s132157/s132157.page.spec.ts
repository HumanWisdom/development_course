import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132157Page } from './s132157.page';

describe('S132157Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132157Page;
  let fixture: ComponentFixture<S132157Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132157Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132157Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
