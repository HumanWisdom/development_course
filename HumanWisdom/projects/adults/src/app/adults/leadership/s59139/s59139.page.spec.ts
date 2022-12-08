import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59139Page } from './s59139.page';

describe('S59139Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59139Page;
  let fixture: ComponentFixture<S59139Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59139Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59139Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
