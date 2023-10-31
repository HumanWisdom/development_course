import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62139Page } from './s62139.page';

describe('S62139Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62139Page;
  let fixture: ComponentFixture<S62139Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62139Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62139Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
