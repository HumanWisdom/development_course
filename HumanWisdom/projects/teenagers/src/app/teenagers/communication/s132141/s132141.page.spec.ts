import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132141Page } from './s132141.page';

describe('S132141Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132141Page;
  let fixture: ComponentFixture<S132141Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132141Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132141Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
