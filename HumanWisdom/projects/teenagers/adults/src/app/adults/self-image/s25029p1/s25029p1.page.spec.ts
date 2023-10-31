import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25029p1Page } from './s25029p1.page';

describe('S25029p1Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25029p1Page;
  let fixture: ComponentFixture<S25029p1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25029p1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25029p1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
