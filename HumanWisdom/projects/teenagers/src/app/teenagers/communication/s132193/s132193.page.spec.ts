import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132193Page } from './s132193.page';

describe('S132193Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132193Page;
  let fixture: ComponentFixture<S132193Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132193Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132193Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
