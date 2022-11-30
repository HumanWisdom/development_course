import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S25036Page } from './s25036.page';

describe('S25036Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S25036Page;
  let fixture: ComponentFixture<S25036Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S25036Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S25036Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
