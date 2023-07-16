import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132179Page } from './s132179.page';

describe('S132179Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132179Page;
  let fixture: ComponentFixture<S132179Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132179Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132179Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
