import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53067Page } from './s53067.page';

describe('S53067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53067Page;
  let fixture: ComponentFixture<S53067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
