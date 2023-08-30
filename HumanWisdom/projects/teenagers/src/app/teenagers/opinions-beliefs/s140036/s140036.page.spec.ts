import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S140036Page } from './s140036.page';

describe('S140036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S140036Page;
  let fixture: ComponentFixture<S140036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S140036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S140036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
