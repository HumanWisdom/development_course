import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132167Page } from './s132167.page';

describe('S132167Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132167Page;
  let fixture: ComponentFixture<S132167Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132167Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132167Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
