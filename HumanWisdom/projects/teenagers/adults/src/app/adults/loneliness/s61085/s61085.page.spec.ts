import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S61085Page } from './s61085.page';

describe('S61085Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S61085Page;
  let fixture: ComponentFixture<S61085Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S61085Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S61085Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
