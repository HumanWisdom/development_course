import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134212Page } from './s134212.page';

describe('S134212Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134212Page;
  let fixture: ComponentFixture<S134212Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134212Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134212Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
