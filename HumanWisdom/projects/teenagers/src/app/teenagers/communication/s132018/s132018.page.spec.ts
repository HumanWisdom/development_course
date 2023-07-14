import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53018Page } from './s132018.page';

describe('S53018Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53018Page;
  let fixture: ComponentFixture<S53018Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53018Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53018Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
