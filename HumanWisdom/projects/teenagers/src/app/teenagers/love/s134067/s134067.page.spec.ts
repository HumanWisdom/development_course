import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134067Page } from './s134067.page';

describe('S134067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134067Page;
  let fixture: ComponentFixture<S134067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
