import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73085Page } from './s73085.page';

describe('S73085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73085Page;
  let fixture: ComponentFixture<S73085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
