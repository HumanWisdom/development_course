import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S45002Page } from './s45002.page';

describe('S45002Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S45002Page;
  let fixture: ComponentFixture<S45002Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S45002Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S45002Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
