import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132245Page } from './s132245.page';

describe('S132245Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132245Page;
  let fixture: ComponentFixture<S132245Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132245Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132245Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
