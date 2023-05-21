import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S117078Page } from './s117078.page';

describe('S117078Page', () => {
  // let   
    let component:  S117078Page;
  let fixture: ComponentFixture<S117078Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S117078Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S117078Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
