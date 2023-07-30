import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62060Page } from './s134063.page';

describe('S62060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62060Page;
  let fixture: ComponentFixture<S62060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
