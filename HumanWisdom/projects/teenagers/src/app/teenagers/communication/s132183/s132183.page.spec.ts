import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53182Page } from './s132183.page';

describe('S53182Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53182Page;
  let fixture: ComponentFixture<S53182Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53182Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53182Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
