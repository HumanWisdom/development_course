import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132241Page } from './s132241.page';

describe('S132241Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132241Page;
  let fixture: ComponentFixture<S132241Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132241Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132241Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
