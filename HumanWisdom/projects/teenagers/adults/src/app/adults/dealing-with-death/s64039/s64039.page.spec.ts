import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64039Page } from './s64039.page';

describe('S64039Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64039Page;
  let fixture: ComponentFixture<S64039Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64039Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64039Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
