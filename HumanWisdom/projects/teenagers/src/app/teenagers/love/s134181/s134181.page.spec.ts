import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134181Page } from './s134181.page';

describe('S134181Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134181Page;
  let fixture: ComponentFixture<S134181Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134181Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134181Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
