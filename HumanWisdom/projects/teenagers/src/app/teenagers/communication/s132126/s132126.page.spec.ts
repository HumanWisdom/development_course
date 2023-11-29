import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132126Page } from './s132126.page';

describe('S132126Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132126Page;
  let fixture: ComponentFixture<S132126Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132126Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132126Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
